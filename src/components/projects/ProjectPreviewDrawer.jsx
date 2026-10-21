import { Button, Drawer, Empty, Spin } from "antd";
import { useState } from "react";
import { DynamicIcon } from "../common/DynamicIcon";

export function ProjectPreviewDrawer({ project, open, onClose }) {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  if (!project) {
    return null;
  }

  const demoUrl = project.demo_url?.trim();

  return (
    <Drawer
      title={project.title}
      placement="right"
      width="min(100vw, 1200px)"
      onClose={onClose}
      open={open}
      destroyOnClose
      styles={{
        body: {
          padding: 0,
          background: "#f8fafc",
        },
      }}
      extra={
        demoUrl ? (
          <Button href={demoUrl} target="_blank" rel="noreferrer">
            Abrir em nova aba
          </Button>
        ) : null
      }
    >
      {!demoUrl ? (
        <div className="flex h-full min-h-[500px] items-center justify-center p-8">
          <Empty description="Este projeto ainda não possui uma demonstração online." />
        </div>
      ) : (
        <div className="relative h-full min-h-[600px] w-full">
          {loading && !hasError ? (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white">
              <div className="flex flex-col items-center gap-3">
                <Spin size="large" />
                <span className="text-sm text-slate-500">
                  Carregando aplicação...
                </span>
              </div>
            </div>
          ) : null}

          {hasError ? (
            <div className="flex h-full min-h-[500px] items-center justify-center p-8">
              <Empty
                image={
                  <DynamicIcon
                    name="mdi:alert-circle-outline"
                    className="h-12 w-12 text-amber-500"
                  />
                }
                description="Não foi possível carregar esta aplicação dentro do portfólio."
              >
                <Button
                  type="primary"
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir em nova aba
                </Button>
              </Empty>
            </div>
          ) : (
            <iframe
              title={`Demonstração de ${project.title}`}
              src={demoUrl}
              className="h-full min-h-[600px] w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
              onLoad={() => setLoading(false)}
              onError={() => {
                setLoading(false);
                setHasError(true);
              }}
            />
          )}
        </div>
      )}
    </Drawer>
  );
}

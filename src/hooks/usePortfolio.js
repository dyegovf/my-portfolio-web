import { useEffect, useState } from "react";
import { getPortfolioData } from "../api/portfolioApi";

export function usePortfolio() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPortfolio() {
      try {
        const data = await getPortfolioData();
        setPortfolio(data);
      } catch (requestError) {
        console.error("Erro ao carregar portfólio:", requestError);
        setError(requestError);
      } finally {
        setLoading(false);
      }
    }

    loadPortfolio();
  }, []);

  return {
    portfolio,
    loading,
    error,
  };
}

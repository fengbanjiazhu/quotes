import React from "react";
import { useEffect } from "react";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";

function AllQuotes() {
  const { sendRequest, status, data: loadedQuotes, error } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner></LoadingSpinner>
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound></NoQuotesFound>;
  }

  return <QuoteList quotes={loadedQuotes}></QuoteList>;
}

export default AllQuotes;

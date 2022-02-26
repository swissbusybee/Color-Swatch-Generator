import * as React from "react";
import { useState } from "react";
import Container from "@mui/material/Container";
import { initalImageData } from "../initialData";
import { ErrorBoundary } from "react-error-boundary";
import ColorSwatchView from "./colorSwatchView";
import { httpGet } from "../utils/helpers";
import SearchInputContainer from "./searchInputContainer";
import PendingLoadingView from "./pendingLoadingView";

export default function ColorGenerator() {
  const [searchInput, setSearchInput] = useState("");
  const [state, setState] = React.useState({
    status: searchInput !== "" ? "pending" : "idle",
    searchResults: initalImageData,
    error: null,
  });
  const { status, searchResults, error } = state;

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  function handleReset() {
    setSearchInput("");
  }

  function ErrorFallback({ error, resetErrorBoundary }) {
    return (
      <div role="alert">
        There was an error:{" "}
        <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    );
  }

  async function getImageData() {
    if (searchInput === "") {
      return;
    }
    setState({ status: "pending" });
    const data = await httpGet(searchInput);
    if (error) {
      setState({ status: "rejected", error });
    } else {
      setState({ status: "resolved", searchResults: data.results });
    }
  }

  function ColorSwatchInfo() {
    if (status === "idle") {
      return <ColorSwatchView data={initalImageData} />;
    } else if (status === "pending") {
      return <PendingLoadingView />;
    } else if (status === "rejected") {
      // this will be handled by an error boundary
      throw error;
    } else if (status === "resolved" && searchResults.length > 0) {
      return <ColorSwatchView data={searchResults} />;
    } else {
      return <div>No results found</div>;
    }
  }

  return (
    <Container maxWidth="xs">
      <SearchInputContainer
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
        getImageData={getImageData}
      />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={handleReset}
        resetKeys={[searchInput]}
      >
        <ColorSwatchInfo />
      </ErrorBoundary>
    </Container>
  );
}

import { useEffect, useState } from "react";
import { QuoteForm } from "./components/QuoteForm";
import { QuoteList } from "./components/QuoteList";
import { api } from "./lib/axios";
import toast from "react-hot-toast";
import type { Quote } from "./types";

export default function App() {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = async () => {
    try {
      const res = await api.get<Quote[]>("/quotes");
      setQuotes(res.data);
    } catch {
      toast.error("Failed to fetch quotes");
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const addQuote = async (text: string) => {
    try {
      const res = await api.post<Quote>("/quotes", { text });
      setQuotes((prev: Quote[]) => [...prev, res.data]);
      toast.success("Quote added!");
    } catch {
      toast.error("Failed to add quote");
    }
  };

  const updateQuote = async (id: number, text: string) => {
    try {
      const res = await api.put<Quote>(`/quotes/${id}`, { text });
      setQuotes((prev: Quote[]) =>
        prev.map((q) => (q.id === id ? res.data : q))
      );
      toast.success("Quote updated!");
    } catch {
      toast.error("Failed to update quote");
    }
  };

  const deleteQuote = async (id: number) => {
    try {
      await api.delete(`/quotes/${id}`);
      setQuotes((prev: Quote[]) => prev.filter((q) => q.id !== id));
      toast.success("Quote deleted!");
    } catch {
      toast.error("Failed to delete quote");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Quotes Board</h1>
      <QuoteForm onAdd={addQuote} />
      <QuoteList quotes={quotes} onUpdate={updateQuote} onDelete={deleteQuote} />
    </div>
  );
}

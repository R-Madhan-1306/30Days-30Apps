import type { Quote } from "@/types";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  quotes: Quote[];
  onUpdate: (id: number, text: string) => void;
  onDelete: (id: number) => void;
}

export function QuoteList({ quotes, onUpdate, onDelete }: Props) {
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  return (
    <div className="space-y-2">
      {quotes.map((q) => (
        <div key={q.id} className="flex gap-2 items-center">
          {editId === q.id ? (
            <>
              <Input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <Button
                onClick={() => {
                  onUpdate(q.id, editText);
                  setEditId(null);
                }}
              >
                Save
              </Button>
              <Button variant="secondary" onClick={() => setEditId(null)}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <span className="flex-1">{q.text}</span>
              <Button
                variant="outline"
                onClick={() => {
                  setEditId(q.id);
                  setEditText(q.text);
                }}
              >
                Edit
              </Button>
              <Button variant="destructive" onClick={() => onDelete(q.id)}>
                Delete
              </Button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

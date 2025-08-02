import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";

type Props = {
  subject: string;
  footer: string;
  onReset: () => void;
};

const MoodOutput = ({ subject, footer, onReset }: Props) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block font-medium text-gray-700">Subject:</label>
        <Input value={subject} readOnly />
      </div>

      <div>
        <label className="block font-medium text-gray-700">Footer Signature:</label>
        <Textarea
            value={footer}
            readOnly
            rows={3}
            className="whitespace-pre-line"
        />
      </div>

      <Button className="w-full" variant="destructive" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
};

export default MoodOutput;

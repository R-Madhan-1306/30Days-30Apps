import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Props = {
  mood: string;
  setMood: (val: string) => void;
  onGenerate: () => void;
  disabled: boolean;
};

const MoodInput = ({ mood, setMood, onGenerate, disabled }: Props) => {
  return (
    <div className="space-y-4">
      <Input
        placeholder="How are you feeling today? (happy, sad, angry, etc.)"
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        disabled={disabled}
      />
      <Button
        className="w-full"
        onClick={onGenerate}
        disabled={disabled}
      >
        Generate Email Template
      </Button>
    </div>
  );
};

export default MoodInput;

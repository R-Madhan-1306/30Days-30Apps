import MoodInput from '@/components/MoodInput';
import MoodOutput from '@/components/MoodOutput';
import { useState } from 'react';

const Home = () => {
  const [mood, setMood] = useState('');
  const [subject, setSubject] = useState('');
  const [footer, setFooter] = useState('');
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    const lowerMood = mood.toLowerCase();
    if (lowerMood.includes('happy')) {
        setSubject('Feeling Great!');
        setFooter('Keep smiling!\nYou’re doing awesome!');
    } else if (lowerMood.includes('sad')) {
        setSubject("It's Okay to Feel Sad");
        setFooter('Better days are coming.\nYou are not alone.');
    } else if (lowerMood.includes('angry')) {
        setSubject("Let's Calm Down");
        setFooter('Take a deep breath.\nIt’s okay to pause.');
    } else {
        setSubject('Mood Update');
        setFooter('Stay positive!\nOne step at a time.');
    }

    setGenerated(true);
  };

  const handleReset = () => {
    setMood('');
    setSubject('');
    setFooter('');
    setGenerated(false);
  };

  const renderEmoji = () => {
    if (subject.includes('Great')) return '😄';
    if (subject.includes('Sad')) return '😢';
    if (subject.includes('Calm')) return '😠';
    return '🙂';
  };

  return (
    <div className="max-w-xl mx-auto mt-20 p-6 rounded-lg shadow-lg bg-white space-y-6 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 text-center">
        💌 Mood Mail Generator
      </h2>


      {generated && (
        <div className="text-center text-5xl">
          {renderEmoji()}
        </div>
      )}

      {!generated ? (
        <MoodInput
          mood={mood}
          setMood={setMood}
          onGenerate={handleGenerate}
          disabled={generated}
        />
      ) : (
        <MoodOutput subject={subject} footer={footer} onReset={handleReset} />
      )}
    </div>
  );
};

export default Home;

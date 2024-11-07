import { Label } from '@/components/ui/label';
import { type Tag, TagInput } from 'emblor';
import { useState } from 'react';

type Props = {
  value: Tag[];
  onChange: (e: Tag[]) => void
};

export function TagsField({ value, onChange }: Props) {
  const [activeTagIndex, setActiveTagIndex] = useState<number | null>(null);
  return (
    <div className="col-span-2 grid gap-2 [&_label]:text-sm">
      <Label>Tags</Label>
      <TagInput
        tags={value}
        // @ts-ignore
        setTags={onChange}
        placeholder="Add a tag"
        maxTags={4}
        styleClasses={{
          input: 'w-full sm:max-w-[350px] shadow-none',
        }}
        activeTagIndex={activeTagIndex}
        setActiveTagIndex={setActiveTagIndex}
      />
    </div>
  );
}

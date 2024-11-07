import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type Props = {
  value: string;
  onChange: (e: string) => void;
};

export function SelectJobType({ onChange, value }: Props) {
  return (
    <div className="grid gap-2 [&_label]:text-sm">
      <Label>Job Type</Label>
      <Select defaultValue={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="part-time">Part Time</SelectItem>
          <SelectItem value="full-time">Full Time</SelectItem>
          <SelectItem value="freelance">Freelance</SelectItem>
          <SelectItem value="internship">Internship</SelectItem>
          <SelectItem value="remote">Remote</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

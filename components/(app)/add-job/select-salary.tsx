import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  value: number
  onChange: (e: number) => void
}

export function SelectSalary({ onChange, value }: Props) {
  return <div className="grid gap-2 [&_label]:text-sm">
    <Label>Salary (year)</Label>
    <Select defaultValue={value.toString()} onValueChange={e => onChange(Number(e))}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="45000">45,000$</SelectItem>
        <SelectItem value="60000">60,000$</SelectItem>
        <SelectItem value="80000">80,000$</SelectItem>
        <SelectItem value="100000">100,000$</SelectItem>
        <SelectItem value="120000">120,000$</SelectItem>
        <SelectItem value="150000">150,000$</SelectItem>
        <SelectItem value="custome">Custome</SelectItem>
      </SelectContent>
    </Select>
  </div>;
}
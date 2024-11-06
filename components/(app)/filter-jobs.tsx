import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MapPin } from 'lucide-react';
import { Label } from '../ui/label';

export function FilterJobs() {
  return (
    <div className="hidden h-fit w-72 rounded-lg border border-border/40 p-4 shadow-sm lg:inline">
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-semibold">Filter</h2>
        <span className="font-medium text-destructive text-xs">Clear All</span>
      </div>
      <hr className="my-4" />
      <div className="grid gap-2 [&_label]:text-sm">
        <Label>Job Type</Label>
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <hr className="my-4" />
      <div className="grid gap-2 [&_label]:text-sm">
        <Label className="flex items-center gap-2">
          <MapPin className="size-4" /> Location
        </Label>
        <Select>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <hr className="my-4" />
      <div className="grid gap-2 [&_label]:text-sm">
        <Label>On-Site/Remote</Label>
        <RadioGroup
          defaultValue="on-site"
          className='flex flex-row flex-wrap justify-between gap-4 p-2'
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="on-site" id="on-site" />
            <Label htmlFor="on-site">On Site</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="hybrid" id="hybrid" />
            <Label htmlFor="hybrid">Hybrid</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="remote" id="remote" />
            <Label htmlFor="remote">Remote</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

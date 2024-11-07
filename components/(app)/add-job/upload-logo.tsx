import { LoadingIcon } from '@/components/common/icons';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useEdgeStore } from '@/lib/edgestore';
import { ImageIcon } from 'lucide-react';
import { useCallback, useTransition } from 'react';
import { useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';

type Props = {
  onChange: (logo: string) => void
}

export function UploadLogo({ onChange }: Props) {
  const [pending, startTransition] = useTransition();
  const { edgestore } = useEdgeStore();

  const onDrop = useCallback(async (files: File[]) => {
    toast.loading('Uploading logo...', { id: 'logo-upload' });
    startTransition(async () => {
      const res = await edgestore.publicFiles.upload({
        file: files[0],
        onProgressChange: (progress) => {
          console.log(progress);
        },
      })
      toast.success('Logo uploaded successfully!', { id: 'logo-upload' });
      onChange(res.url);
    })
  }, [])

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    maxFiles: 1,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg'],
    },
  })

  return (
    <div className='col-span-2 grid gap-2 [&_label]:text-sm'>
      <Label>Logo</Label>
      <Button type='button' {...getRootProps()} className="w-full" variant={'outline'}>
        <input {...getInputProps()} />
        {pending ? <LoadingIcon className='fill-primary' /> : <ImageIcon />}
        Drag Logo Here
      </Button>
    </div>
  );
}

import clsx from 'clsx';

const toolList = ['DALL•E', 'Browsing', 'Data Analysis'];

interface GPTToolsProps {
  data: GPTHub.GPTInfo;
  size?: 'sm' | 'md' | 'lg';
}

export default function GPTTools({ data, size = 'md' }: GPTToolsProps) {
  if (!data?.tools?.length) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {data?.tools?.map((item) => {
        if (!item) return null;
        const el = toolList?.[item-1];
        return (
          <div key={item} className={clsx('badge', {
            'badge-sm': size === 'sm',
            'badge-lg': size === 'lg',
            'badge-md': size === 'md',
            'inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-10 ring-inset ring-blue-700/10': item === 1,
            'inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-10 ring-inset ring-purple-700/10': item === 2,
            'inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-10 ring-inset ring-pink-700/10': item === 3,
          })}>
            {el}
          </div>
        );
      })}
    </div>
  );
}
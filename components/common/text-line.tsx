export const TextLine = ({ text = '' }) => (
  <div className="relative my-2">
    <div className="absolute inset-0 flex items-center">
      <span className="w-full border-border/50 border-t" />
    </div>
    <div className="relative flex justify-center text-xs">
      <span className="bg-card px-2 text-muted-foreground md:bg-card">
        {text}
      </span>
    </div>
  </div>
);
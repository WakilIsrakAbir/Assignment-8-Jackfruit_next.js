export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-base-100">
      <span className="loading loading-infinity text-primary" style={{ width: '5rem' }}></span>
      <p className="mt-6 text-xl font-medium text-base-content/70 animate-pulse tracking-widest">LOADING</p>
    </div>
  );
}

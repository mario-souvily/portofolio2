/* Halos décoratifs en fond de page — la page parente doit être relative + overflow-hidden */
export const Blobs = () => {
  return (
    <>
      <div
        className="absolute -top-36 -left-32 w-[640px] h-[640px] rounded-full anim-drift pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(190, 227, 120, 0.55), rgba(190, 227, 120, 0))" }}
      ></div>
      <div
        className="absolute top-16 -right-40 w-[700px] h-[700px] rounded-full anim-drift-rev pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(245, 229, 120, 0.5), rgba(245, 229, 120, 0))" }}
      ></div>
    </>
  );
};

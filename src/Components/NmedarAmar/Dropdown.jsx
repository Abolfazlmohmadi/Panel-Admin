import { useEffect, useId, useRef, useState } from "react";

export default function Dropdown({
  options = [],
  value,
  onChange,
  placeholder = "انتخاب کنید",
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const ref = useRef(null);
  const listId = useId();

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function handleEscape(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (open) setActiveIndex(options.findIndex((o) => o.value === value));
  }, [open, options, value]);

  const selected = options.find((o) => o.value === value) || null;

  function onKeyDown(e) {
    if (!open) {
      if (["ArrowDown", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % options.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + options.length) % options.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt) {
        onChange?.(opt.value);
        setOpen(false);
      }
    }
  }

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={onKeyDown}
        className={`group flex w-full items-center justify-between gap-2 rounded-xl border bg-[#151A2E] px-3 py-2 text-sm outline-none transition-all duration-200 ${
          open
            ? "border-indigo-500/60 ring-2 ring-indigo-500/20"
            : "border-[#343450] hover:border-[#4a4f6e]"
        }`}
      >
        <span className={selected ? "text-gray-200" : "text-gray-500"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`h-4 w-4 shrink-0 text-gray-400 transition-transform duration-300 ${open ? "rotate-180 text-indigo-300" : "group-hover:text-gray-200"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <ul
        id={listId}
        role="listbox"
        className={`absolute z-20 mt-2 w-full origin-top overflow-hidden rounded-xl border border-[#343450] bg-[#151A2E] py-1 shadow-xl shadow-black/40 backdrop-blur-sm transition-all duration-150 ${open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0"}`}
      >
        {options.map((opt, i) => {
          const active = opt.value === value;
          const highlighted = i === activeIndex;
          return (
            <li key={opt.value} role="option" aria-selected={active}>
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 px-3 py-2 text-sm transition-colors duration-150 ${active ? "bg-indigo-500/15 text-indigo-300" : highlighted ? "bg-white/5 text-white" : "text-gray-300 hover:bg-white/5 hover:text-white"}`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors ${active ? "bg-indigo-400" : "bg-transparent"}`}
                />
                <span className="flex-1 text-right">{opt.label}</span>
                {active && (
                  <svg
                    className="h-4 w-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

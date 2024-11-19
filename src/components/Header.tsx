"use client";

export default function Header(): JSX.Element {
  return (
    <header className="header flex justify-center items-center p-5">
      <label className="flex cursor-pointer gap-2">
        <span className="label-text">Toggle Theme</span>
        <input
          className="toggle theme-controller"
          type="checkbox"
          value="light"
        />
      </label>
    </header>
  );
}

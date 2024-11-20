export default function ThemeToggle(): JSX.Element {
  return (
    <label className="flex cursor-pointer gap-2" htmlFor="themeToggle">
      <span className="label-text">Toggle Theme</span>
      <input
        aria-label="Toggle theme"
        className="toggle theme-controller"
        id="themeToggle"
        type="checkbox"
        value="light"
      />
    </label>
  );
}

import { useSettings } from "../context/SettingsContext";

const accents = [
  { id: "violet", label: "Binafsha" },
  { id: "blue", label: "Ko'k" },
  { id: "green", label: "Yashil" },
  { id: "orange", label: "To'q sariq" },
] as const;

const fonts = [
  { id: "sans", label: "Oddiy" },
  { id: "serif", label: "Klassik" },
  { id: "mono", label: "Kod" },
] as const;

const sizes = [
  { id: "sm", label: "Kichik" },
  { id: "md", label: "O'rtacha" },
  { id: "lg", label: "Katta" },
] as const;

function Settings() {
  const { settings, update, reset } = useSettings();

  return (
    <div className="settings-page">
      <div className="settings-head">
        <h1>Sozlamalar</h1>
        <p>Saytning ko'rinishini o'zingizga moslang</p>
      </div>

      <section className="settings-card">
        <h3>Mavzu</h3>
        <div className="seg">
          <button
            className={settings.theme === "dark" ? "seg-btn active" : "seg-btn"}
            onClick={() => update({ theme: "dark" })}
          >
            🌙 Qorong'i
          </button>
          <button
            className={settings.theme === "light" ? "seg-btn active" : "seg-btn"}
            onClick={() => update({ theme: "light" })}
          >
            ☀️ Yorug'
          </button>
        </div>
      </section>

      <section className="settings-card">
        <h3>Asosiy rang</h3>
        <div className="swatches">
          {accents.map((a) => (
            <button
              key={a.id}
              className={`swatch swatch-${a.id}${settings.accent === a.id ? " active" : ""}`}
              onClick={() => update({ accent: a.id })}
              title={a.label}
              aria-label={a.label}
            />
          ))}
        </div>
      </section>

      <section className="settings-card">
        <h3>Shrift</h3>
        <div className="font-grid">
          {fonts.map((f) => (
            <button
              key={f.id}
              className={`font-card font-${f.id}${settings.font === f.id ? " active" : ""}`}
              onClick={() => update({ font: f.id })}
            >
              <span className="font-aa">Aa</span>
              <span className="font-name">{f.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="settings-card">
        <h3>Matn o'lchami</h3>
        <div className="seg">
          {sizes.map((s) => (
            <button
              key={s.id}
              className={settings.fontSize === s.id ? "seg-btn active" : "seg-btn"}
              onClick={() => update({ fontSize: s.id })}
            >
              {s.label}
            </button>
          ))}
        </div>
      </section>

      <button className="settings-reset" onClick={reset}>
        Standartga qaytarish
      </button>
    </div>
  );
}

export default Settings;
export default function InfoTooltip({ isSuccess, message, onClose }) {
  return (
    <div className="info-tooltip">
      <div
        className={`info-tooltip__icon ${
          isSuccess
            ? "info-tooltip__icon_type_success"
            : "info-tooltip__icon_type_error"
        }`}
      >
        {isSuccess ? "✓" : "!"}
      </div>

      <h2 className="info-tooltip__title">
        {isSuccess ? "¡Todo listo!" : "Ha ocurrido un problema"}
      </h2>

      <p className="info-tooltip__message">{message}</p>

      <button type="button" className="info-tooltip__button" onClick={onClose}>
        {isSuccess ? "Continuar" : "Intentar de nuevo"}
      </button>
    </div>
  );
}

export type AbilityCardProps = {
  name: string;
  description?: string;
  onReroll?: () => any;
  onBlacklist?: () => any;
}

export const AbilityCard = ({
  name,
  description,
  onReroll,
  onBlacklist,
}: AbilityCardProps) => {
  return (
    <div className="ability-card">
      <h3 className="ability-card__title">{name}</h3>
      {description && (
        <div className="ability-card__description">
          <p>{description}</p>
        </div>
      )}
      <div className="ability-card__controls">
        {onReroll && (
          <button onClick={onReroll} aria-label="Refresh" title="Refresh">
            <i className="fa-solid fa-arrows-rotate"></i>
          </button>
        )}
        {onBlacklist && (
          <button onClick={onBlacklist} aria-label="Blacklist" title="Blacklist">
            <i className="fa-solid fa-ban"></i>
          </button>
        )}
      </div>
    </div>
  );
}

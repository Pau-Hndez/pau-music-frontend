function ReviewCard({ name, course, image, rating, text }) {
  return (
    <article className="review-card">
      <span className="review-card__quote">“</span>

      <img className="review-card__image" src={image} alt={`Foto de ${name}`} />

      <div
        className="review-card__rating"
        aria-label={`${rating} de 5 estrellas`}
      >
        {"★".repeat(rating)}
      </div>

      <p className="review-card__text">{text}</p>

      <h3 className="review-card__name">{name}</h3>

      <span className="review-card__course">{course}</span>
    </article>
  );
}

export default ReviewCard;

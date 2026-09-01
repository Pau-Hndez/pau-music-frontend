import ReviewCard from "../ReviewCard/ReviewCard";

import mariaImage from "../../../assets/images/maria.png";
import juanImage from "../../../assets/images/juan.png";
import valentinaImage from "../../../assets/images/valentina.png";

const reviews = [
  {
    id: 1,
    name: "María Fernanda",
    course: "Estudiante de Piano",
    image: mariaImage,
    rating: 5,
    text: "Las clases con Pau son increíbles. Tiene una forma muy clara y paciente de enseñar. He mejorado muchísimo en piano y disfruto cada clase.",
  },
  {
    id: 2,
    name: "Juan Camilo",
    course: "Estudiante de Guitarra",
    image: juanImage,
    rating: 5,
    text: "Pau es una excelente profe. Sus clases de guitarra son dinámicas y divertidas, siempre se adapta a mis gustos musicales. ¡Totalmente recomendada!",
  },
  {
    id: 3,
    name: "Valentina",
    course: "Estudiante de Piano",
    image: valentinaImage,
    rating: 5,
    text: "Me encanta cómo Pau combina la teoría con la práctica. He aprendido no solo a tocar, sino a entender la música de una manera muy especial.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="estudiantes">
      <div className="testimonials__header">
        <h2>LO QUE DICEN MIS ESTUDIANTES</h2>
        <p>Sus experiencias son mi mayor motivación</p>
      </div>

      <div className="testimonials__list">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            course={review.course}
            image={review.image}
            rating={review.rating}
            text={review.text}
          />
        ))}
      </div>

      <div className="testimonials__dots">
        <span className="testimonials__dot testimonials__dot--active"></span>
        <span className="testimonials__dot"></span>
        <span className="testimonials__dot"></span>
        <span className="testimonials__dot"></span>
      </div>
    </section>
  );
}

export default Testimonials;

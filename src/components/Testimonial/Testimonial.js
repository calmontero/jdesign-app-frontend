import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};

const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {
  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
    >
      <div style={{ width: "50%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
          <Card img="https://i.ibb.co/vjzz5q8/instagram-profile-calmontero.jpg" p="Un cliente satisfecho es un cliente fiuel, un cliente que se vuelve parte de la familia del negocio, un cliente valioso.  Por eso priorizamos su satisfacción y la procuramos con gran esfuerzo."
           title="@calmontero" link='http://instagram.com/_u/calmontero' />
          <Card img="https://i.ibb.co/qRKMR2p/instagram-profile-valear-cl.jpg" p="Totalmente encantada con el servicio.  Muy amables, muy atentos y el envío perfecto.  No tardaron ni dos días desde que lo compré.  Sin duda un acierto confiar en ellos.  Gracias." 
           title="@valear.cl" link='http://instagram.com/_u/valear.cl' />
          <Card img="https://i.ibb.co/9NXQDPV/instagram-profile-kraftingmoments.jpg" p="Estoy muy contenta con el servicio de Jdesign. Seria y responsable, la recomiendo altamente." 
           title="@kraftingmoments" link='http://instagram.com/_u/kraftingmoments' />
          <Card img="https://i.ibb.co/0Q7sTGr/instagram-profile-agape-designs.jpg" p="Excelente servicio, impecable resultado. Me fascino los detalles del caketopper. Gracias." 
           title="@agape_designs_" link='http://instagram.com/_u/agape_designs_' />
        </Slider>
      </div>
    </div>
  );
};

const Card = ({ img, p, title, link }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={img}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        {p}
      </p>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <a style={{ fontWeight: 500, color: "green" }} href={link} target="_blank">{title}</a>
      </p>
    </div>
  );
};

export default Testimonial;
const Advice = ({ advice, fetchError }) => {
  return (
    <p className="advice">
            "{advice ? advice : fetchError}"
    </p>
  )
}

export default Advice
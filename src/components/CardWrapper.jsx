const CardWrapper = ({ children }) => {
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
          <div className="card">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardWrapper
function TemplatePage(props) {
  return (
    <div>
      <section className="internal-page-wrapper my-5">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12 mt-5">
              <h1 className="font-weight-bold">{props.title} Page</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TemplatePage;

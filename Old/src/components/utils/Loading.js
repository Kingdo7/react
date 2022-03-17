const style = {
    minHeight: "90vh"
  };

const Loading = () => (
    <div style={style}
    className = "d-flex justify-content-center align-items-center w-100">
        <img src="/assets/images/loading.gif" alt="Loading" />
    </div>
);

export default Loading;
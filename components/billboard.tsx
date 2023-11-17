import { Billboard as BillboardType } from "@/types";

interface BillboardProps{
    data:BillboardType
};

const Billboard: React.FC<BillboardProps> = ({
    data
}) => {
    return ( 
        <header className="">
        <div className="page-header min-vh-75">
            <span className="mask bg-gradient-info opacity-4"></span>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 my-auto text-white text-xl-left">
                        <h1 className="text-dark display-2 
 font-weight-bolder mb-4">{data.description}</h1>
                        <p className="text-dark mb-0">Get 50% Off for your first purchase</p>
                        <p className="text-dark font-weight-bolder text-lg">{data.label}</p>
                        <button type="submit" className="btn bg-gradient-primary mt-3 mb-0">Shop now</button>
                    </div>
                    <div className="col-lg-6">
                    <div
  className="positio-absolute rounded-circle end-4 top-0 mt-n4 shadow-lg d-xl-block d-none"
  style={{
    backgroundImage: `url(${data.imageUrl})`,
    width: '600px',
    height: '600px',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }}
></div>
                    </div>

                </div>
            </div>
        </div>
        <div className="container">
            <div className="row bg-white shadow mt-n5 border-radius-lg pb-4 p-3 mx-sm-0 mx-1 position-relative z-index-2">
                <div className="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
                    <div className="d-flex align-items-center">
                        <i className="fa fa-bus fa-2x text-dark" aria-hidden="true"></i>
                        <div className="ms-3">
                            <h6 className="mb-0">Free Shipping</h6>
                            <p className="text-sm mb-0">On order bigger than $50</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
                    <div className="d-flex align-items-center">
                        <i className="fa fa-suitcase fa-2x text-dark" aria-hidden="true"></i>
                        <div className="ms-3">
                            <h6 className="mb-0">15 Days Return</h6>
                            <p className="text-sm mb-0">Moneyback guarantee</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
                    <div className="d-flex align-items-center">
                        <i className="fa fa-coins fa-2x text-dark" aria-hidden="true"></i>
                        <div className="ms-3">
                            <h6 className="mb-0">Secure Checkout</h6>
                            <p className="text-sm mb-0">Secured by Stripe</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mt-2 mb-lg-0 mb-2">
                    <div className="d-flex align-items-center">
                        <i className="fa fa-gift fa-2x text-dark" aria-hidden="true"></i>
                        <div className="ms-3">
                            <h6 className="mb-0">Make Money</h6>
                            <p className="text-sm mb-0">Use our affiliate program</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

      );
}
 
export default Billboard
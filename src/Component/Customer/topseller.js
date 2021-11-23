
import React from 'react';

function Topseller() {
    return (
        <div className="product-top-seller d-flex flex-column">
            <div>
                <h3 >TOP BÁN CHẠY</h3>
            </div>

            <div className="text-center">
                <img src="https://product.hstatic.net/1000404680/product/product-deluxe_ds374_1875x1875px_7cee72c2658a406f9f2677783950c434_master.jpg"
                    alt="felina" style={{ width: "150px" }} className="rounded" />
                <p>
                    Sơn móng tay Felina
                </p>
            </div>

            <div className="text-center">
                <img src="https://salt.tikicdn.com/ts/product/46/d7/be/6c8a6d79d5aa5e30f7d1c91c6aad60e5.jpg"
                    alt="elite" style={{ width: "150px" }} />

                <p>
                    Sơn dưỡng móng Elite
                </p>
            </div>
        </div>
    )
};

export default Topseller;
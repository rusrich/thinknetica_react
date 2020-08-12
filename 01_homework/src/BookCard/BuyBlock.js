import React from 'react'
import WishBookPage from "./WishBookPage";
import DeliveredModal from "./DeliveredModal";

const BuyBlock = (props) => {
    return (
      <div style={styles.butblock}>
        <WishBookPage style={styles.wishBook} />
        <DeliveredModal style={styles.deliver} />
      </div>
    )
}

export default BuyBlock


const styles = {
  wishBook: {
    display: 'block',
    marginTop: '40px'
  },

  butblock: {
    display: 'flex'
  },
  deliver: {
    display: 'block',
    marginTop: '40px'
  },
}
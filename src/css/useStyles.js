import { makeStyles } from "@mui/styles"

const useStyles = makeStyles(() => ({
  header: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    color: "#f88905",
    overflow: "hidden",
    position: "fixed",
    top: "0",
    zIndex: "1",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.16)",
  },
  headerLinks: {
    color: "#4ca1a3",
    textDecoration: "none",
    width: "20%",
  },
  searchbar: {
    width: "50%",
  },
  textfield: {
    borderTop: "hidden",
    borderRight: "hidden",
    borderLeft: "hidden",
    width: "100%",
    padding: "1%",
    fontFamily: "Raleway, sans-serif",
    fontSize: "1.2rem",
    borderBottom: " 1px solid #ccc",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1%",
  },
  buttons: {
    textDecoration: "none",
  },
  cartBadge: {
    position: "absolute",
    top: "28px",
    right: "12%",
    borderRadius: "50%",
    backgroundColor: "#000",
    color: "#fff",
    display: "inline-block",
    paddingLeft: " 5px",
    paddingRight: "5px",
    fontSize: "0.6rem",
  },
  productContainer: {
    margin: "2% 0%",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  cart: {
    marginTop: "10%",
  },
  cartHeader: {
    textAlign: "left",
    paddingLeft: "2%",
    color: "#4ca1a3",
  },
  cartContainer: {
    display: "flex",
  },
  cartItems: {
    flexWrap: "wrap",
    width: "100%",
  },
  productCard: {
    display: "flex",
    margin: "2%",
    padding: "32px 0",
    width: "100%",
  },
  productImage: {
    width: "10%",
    height: "10vh",
  },
  productTitle: {
    width: "60%",
  },
  productPrice: {
    width: "20%",
  },
  productAction: {
    width: "20%",
  },
  checkoutSection: {
    color: "#000",
    padding: "32px 25px",
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "flex-end",
    width: "30%",
  },
  checkoutTitle: {
    display: "flex",
    padding: "5% 2%",
    width: "100%",
    textAlign: "left",
  },
  checkoutSubTitle: {
    paddingRight: "15%",
  },
  checkoutSubTitle2: {
    paddingRight: "35%",
  },
}))

export default useStyles

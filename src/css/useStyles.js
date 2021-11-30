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
  banner: {
    marginTop: "6%",
    backgroundColor: "#4ca1a3",
    width: "100%",
    padding: "4% 4% 0%",
    display: "flex",
    justifyContent: "space-between",
    color: "#4f4f4f",
    alignItems: "center",
  },
  bannerImgContainer: {
    width: "60%",
  },
  bannerImg: {
    width: "70%",
    borderRadius: "10px",
  },
  bannerText: {
    textAlign: "left",
    lineHeight: "1.5",
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
  productItems: {
    width: "20%",
    padding: "2%",
  },
  productItemsImg: {
    width: "50%",
    height: "20vh",
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
  footer: {
    backgroundColor: "#4ca1a3",
    color: "#fff",
  },
  footerContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  footerItems: {
    width: "23%",
    padding: "2% 2%",
    marginTop: "2%",
  },
  footerItemsLinks: {
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    paddingTop: "2%",
    paddingBottom: "4%",
    textDecoration: "none",
  },
  footerSocials: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    width: "60%",
    padding: "2% 0",
    margin: "14% 14%",
    cursor: "pointer",
  },
  footerCopyright: {
    textAlign: "center",
    padding: "1% 0",
  },
}))

export default useStyles

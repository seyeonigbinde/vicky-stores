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
  },
  searchbar: {
    width: "50%",
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
}))

export default useStyles

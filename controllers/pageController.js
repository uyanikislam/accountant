const getIndexPage = (req,res) => {
    res.render("index")
}
const getCariPage = (req,res) => {
    res.render("Cari")
}

const getContactPage = (req,res) => {
    res.render("Contact")
}

const getBirdPage = (req,res) => {
    res.render("Bird")
}

export {getIndexPage, getCariPage, getContactPage, getBirdPage }
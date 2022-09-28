const getIndexPage = (req,res) => {
    res.render("index")
}
const getAboutPage = (req,res) => {
    res.render("About")
}

const getContactPage = (req,res) => {
    res.render("Contact")
}

const getBirdPage = (req,res) => {
    res.render("Bird")
}

export {getIndexPage, getAboutPage, getContactPage, getBirdPage }
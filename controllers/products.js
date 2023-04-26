const Product = require("../models/product")

const getAllProductsTesting = async (req, res) =>{

  const {company, name, featured, sort, select} = req.query;
  const queryObect = {}

  if(company){
    queryObect.company = company
  }
  if(featured){
    queryObect.featured = featured
  }

  if(name){
    queryObect.name = {$regex:name, $options:"i"};  // similar type of strings
  }

  let apiData = Product.find(queryObect);

  if(sort){
    sortFix = sort.split(",").join(" ")
    apiData = apiData.sort(sortFix)
  }

  if(select){
    // selectFix = select.replace("," , " ")
    selectFix = select.split(",").join(" ")
    apiData = apiData.select(selectFix)
  }

  let page = Number(req.query.page) || 1;
  let limits = Number(req.query.limit) || 3;   

  let skip_page = (page-1)*limits;

  apiData = apiData.skip(skip_page).limit(limits)

  const myData = await apiData ;
  console.log("the filter is", req.query);
  res.status(200).json({myData});
};

const getAllProducts = async (req, res) =>{
  const myData = await Product.find(req.query);    //  will automatically search for the input query
  console.log("the filter is", req.query);
  res.status(200).json({myData});
};

module.exports = {getAllProducts, getAllProductsTesting};
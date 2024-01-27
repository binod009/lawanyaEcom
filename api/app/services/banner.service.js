const DbService = require("./db.service");
const Joi = require("joi");
const bannerModel = require("../models/banner.model");
class BannerService extends DbService {
  validateBanner = (data) => {
    try {
      let bannerSchema = Joi.object({
        bannerName: Joi.string().required(),
        image: Joi.string().empty(),
        status: Joi.string().required(),
      });
      let response = bannerSchema.validate(data);

      if (response.error) {
        throw response.error.details[0].message;
      }
    } catch (err) {
      throw err;
    }
  };

  createBanner = async (data) => {
    try {
      let banner_obj = new bannerModel(data);
      banner_obj.save();
      return banner_obj;
    } catch (err) {
      throw err;
    }
  };

  getBanner = async () => {
    try {
      return await bannerModel.find({});
    } catch (err) {
      throw err;
    }
  };

  deleteBannerById = async (bannerid) => {
    try {
      return await bannerModel.findByIdAndDelete(bannerid);
    } catch (excp) {
      next({ status: 404, msg: excp });
    }
  };
}

module.exports = BannerService;

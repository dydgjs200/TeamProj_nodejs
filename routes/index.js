// routes/api.js

const express = require("express");
const router = express.Router();
const getUrlMiddleware = require('../middlewares/getUrl');
const checkAccessTokenMiddleware = require('../middlewares/checkAccessToken');
const controller = require("../controllers/community.controller");

router.get("/community", getUrlMiddleware, controller.community);

// searchCommunity 부분
router.post("/searchCommunity", controller.searchCommunity);

// 글 작성하기
router.post("/submitCommunity", controller.communityPost);
router.get("/writeCommunity", checkAccessTokenMiddleware, controller.writeCommunity);
router.post("/modifyCommunity", controller.sendModifyCommunity);
router.get("/modifyCommunity", controller.reciveModifyCommunity);
router.patch("/submitModifyCommunity", controller.submitModifyCommunity);

// 글 읽기
router.get("/readCommunity", getUrlMiddleware, controller.readCommunity);
router.post("/detailCommunityPage", controller.detailCommunityPage);

// 글 삭제
router.delete("/deleteCommunity/:number", controller.deleteCommunity);

// 댓글 관련
router.post("/writeComment", controller.writeComment);
router.post("/likeComment", controller.likeComment);

module.exports = router;

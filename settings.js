/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUsrWHR0YU1ldStQa25hciswOUdOMzRML1FCaHZad2ZlRkF0TC9OaHoyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWptN2VIbEMyRDJHTGpkd0FibWtablVMWlhiTEMxZGVqaFhIbmFwc1VIWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQ09veXowU050emRCQVo4b1cwdGVnMWZ6MGpub0xtTis4SnRPL3MrY0c0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQL2hzWjErNXloRElTT2VBQVZJcmFKN3JMTE5CQ2pFMFRkbldTRkdIbW5nPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldMcTUrZHlnb3Y1SWljT3VPNTIySGFVbGJ2Qjl2a0g3QTA3ZHF0enE2bEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjIyS3V0NHMwVWxSb0hYNkp0L0w2Yi8yTkQ5WGJnNjR4bVhPY0g5Qm1xbEU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUNocWQzelZJa1NDeWlQRVVCMkVHMktzNDBXME5qWmlIYkJYQndkdmIwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZHZMR0RNeXpsWEZURXZ6Zk5kSkxZcGh2TUdhZlRGeFd2UzhpVnF0M2FrVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtoTkFwbC80V0JKakRwZzRQREZibmNsVVZST0RzMmQyRXBiVURBa3NmU0QvOTJxdWZBQU55VHAzdEF3K2xSbUxnN0xvZVdybkhYdTdvUHJkcWpuM0JBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTcsImFkdlNlY3JldEtleSI6IkMwUlhEUjhWdFF3UHZXNGhRY05tdzBBNVkvbFZIM2JCQ2lrSXUwRCt1Wlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzkxMDE0MzI0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNDRDMwNjY4QTQ0MzU5M0IxMjlFRUVENjQ5QjgwRUNEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mzk5MDU0MTN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc5MTAxNDMyNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0REUyMzNFNkZCQzc2MTFBMUY2QzBGNjI1Mjk5QTVENCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM5OTA1NDI0fV0sIm5leHRQcmVLZXlJZCI6MzMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMywiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJaMXFjb2xNZVFNdUkzcFVkbHQ3SS1BIiwicGhvbmVJZCI6ImZlZmNiNGI3LTM2MjItNGE1ZC04ZTNiLWNkMjM2OTA4MWJlYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBS0lxZ1lSdTZKYUtOcjRHc0JKeXhiVnJsQW89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTDA3RDh2R05MUmdoZXNYMFBaTEJLbTlPcG1jPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjVWWllFMkJUIiwibWUiOnsiaWQiOiIyNTQ3OTEwMTQzMjQ6NzVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiPEtFTk5FRFkvPiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFhwczlRREVPT3kwNzBHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSGhYRDl1N2xpNWZtb1Y5SG5NQU9EMGRrZHlQangwSnQ0UldTbk94M1NWST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTDdiSFNMcDU0U255Wlp5QW5VVUpDVWFiZzFUbzhGSTZvK3d0QXZ3Wk1qWTdkWjFzMnRLRnJlUG1TV2JVUEJUNGVYQmZXcnpiNENhKzd2dXVxdFpFQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Inc2bCsxN1B2WnpIOFdGd3lLZXExUWZqWHZxL3RYSlU5d2FBYTlEQmRaN1l6bVBiMm13TUZMaUQyaHdYbFlQY3NWcWhUODRRNG43VVZqU003T2FsekRRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzkxMDE0MzI0Ojc1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlI0VncvYnU1WXVYNXFGZlI1ekFEZzlIWkhjajQ4ZENiZUVWa3B6c2QwbFMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mzk5MDUzOTQsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBR2hnIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.PACKNAME || 'dreaded md2 🤖';
const dev = process.env.DEV || '254791014324';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'VENUS';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const cookies = JSON.parse(process.env.COOKIE || '[{"domain":".youtube.com","expirationDate":1764463277.409877,"hostOnly":false,"httpOnly":false,"name":"__Secure-1PAPISID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"UoBcKfo0_FSAxQ5D/A5ZClpB2xVLQJQGUx","id":1},{"domain":".youtube.com","expirationDate":1764463277.412158,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSID","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"g.a000pghxevPjwTr5Un_D-PS1UxiaEdymANhc_5NWNQgaApthzLU0MOFGGamQ5yqi2vrAqKldbgACgYKASoSARUSFQHGX2MiB0PtUQYJy2_oQLkmMPXgfRoVAUF8yKpuqWya_M2xRHe_6e9o_6TK0076","id":2},{"domain":".youtube.com","expirationDate":1762941611.655441,"hostOnly":false,"httpOnly":true,"name":"__Secure-1PSIDCC","path":"/","sameSite":"unspecified","secure":true,"session":false,"storeId":"0","value":"AKEyXzWtrmvqerXnEweUSkGiFKAn57TBnvoAEBDi6B33Sg4gpMOANgVFwDBU_JtKQXLpisy_","id":3}]');
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  cookies,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};

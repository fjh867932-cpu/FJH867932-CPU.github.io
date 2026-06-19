/**
 * Gate 视频资源配置
 *
 * 后续更换视频只需修改以下 URL。
 *
 * 推荐存储方案（按优先级）：
 *   1. Supabase Storage
 *   2. Cloudflare R2
 *   3. 腾讯云 COS
 *
 * 不建议长期存放在项目仓库中（会导致仓库体积快速增大、更新需重新部署）。
 *
 * 视频格式要求：MP4 (H.264)
 *   - PC 端视频建议 ≤ 10MB（1920×1080 或更高）
 *   - Mobile 端视频建议 ≤ 5MB（720p 即可）
 */

/* ── 视频源 ── */
const GATE_VIDEO_PC     = "https://wwqqvfnuxpddhgwuwiut.supabase.co/storage/v1/object/public/video/gate-pc.mp4";
const GATE_VIDEO_MOBILE = "https://wwqqvfnuxpddhgwuwiut.supabase.co/storage/v1/object/public/video/gate-mobile.mp4";

/* ── 静态回退图（视频加载前 / 加载失败时显示）── */
const GATE_VIDEO_POSTER = "assets/gate-bg.jpg";

/* ── 设备断点：< 768px 视为移动端 ── */
const GATE_MOBILE_BREAKPOINT = 768;

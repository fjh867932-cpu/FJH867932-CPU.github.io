/**
 * 归档：密钥门禁检查逻辑
 *
 * 以下代码从 main.html 和 app.js 中移除，整理归档至此文件。
 * 原始用途：在用户访问主站前进行密钥验证，防止绕过。
 *
 * ── 来源 1：main.html <head> 内的门禁检查脚本 ──
 *
 *    <script>
 *      // 强制检查：防止绕过验证直接访问主站
 *      if (!localStorage.getItem("verified")) {
 *          localStorage.removeItem("huiwu_session");
 *          window.location.href = "/verify.html";
 *      }
 *    </script>
 *
 * ── 来源 2：app.js 开头的访问门禁逻辑 ──
 *
 *    const AUTH_FN_URL = 'https://wwqqvfnuxpddhgwuwiut.supabase.co/functions/v1/auth';
 *    const AUTH_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind3cXF2Zm51eHBkZGhnd3V3aXV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2NzAwNDcsImV4cCI6MjA5NjI0NjA0N30.eCfxc2WeXkpJiMXRCzydwmFE3Z6UMk3aqOdrhdzZbug';
 *
 *    (function checkAuth() {
 *      const session = localStorage.getItem('huiwu_session');
 *      if (session) {
 *        try {
 *          const { time } = JSON.parse(session);
 *          if (Date.now() - time < 3 * 24 * 60 * 60 * 1000) return; // 3天有效
 *        } catch (_) {}
 *      }
 *      // 无有效会话，渲染门禁页
 *      document.body.innerHTML = `
 *        <div class="gate-page">
 *          <div class="gate-box">
 *            <h1>huiwu.com</h1>
 *            <p>请输入访问密钥</p>
 *            <input type="password" id="gateKey" placeholder="密钥…" autofocus />
 *            <button id="gateBtn">进入</button>
 *            <label><input type="checkbox" id="gateRemember" checked /> 记住 3 天</label>
 *            <p id="gateErr" style="color:#e05555;display:none"></p>
 *          </div>
 *        </div>`;
 *      document.getElementById('gateBtn').addEventListener('click', async () => {
 *        const key = document.getElementById('gateKey').value.trim();
 *        if (!key) return;
 *        try {
 *          const res = await fetch(AUTH_FN_URL, {
 *            method: 'POST',
 *            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${AUTH_ANON_KEY}` },
 *            body: JSON.stringify({ key }),
 *          });
 *          const data = await res.json();
 *          if (data.valid) {
 *            localStorage.setItem('huiwu_session', JSON.stringify({ session: data.session, time: Date.now() }));
 *            location.reload();
 *          } else {
 *            const err = document.getElementById('gateErr');
 *            err.textContent = '密钥错误';
 *            err.style.display = 'block';
 *          }
 *        } catch (e) {
 *          document.getElementById('gateErr').textContent = '网络错误';
 *          document.getElementById('gateErr').style.display = 'block';
 *        }
 *      });
 *      throw new Error('GATE'); // 阻止后续 JS 执行
 *    })();
 *
 * ── 来源 3：index.html 中跳转到 verify.html 的逻辑 ──
 *
 *    // 标记已通过 Gate，避免 verify.html 回跳
 *    localStorage.setItem('passed_gate', '1');
 *
 *    // 跳转目标原为 /verify.html
 *    window.location.href = '/verify.html';
 *
 * ── 来源 4：verify.html 中完整的密钥验证页面 ──
 *
 *    已完整归档到 old/verify.html，包含：
 *    - 密钥输入 UI
 *    - 直接进入（跳过验证）按钮
 *    - 会话检查逻辑（huiwu_session / passed_gate）
 *    - 调用 Supabase auth 函数验证密钥
 *    - 验证成功后跳转到 /main.html
 */

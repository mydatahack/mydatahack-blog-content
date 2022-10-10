# How to configure debugger when running jest for React unit tests with VS Code

We can debug the jest test with <span class="code">console.log</span> (make sure to remove the <span class="code">--silent</span> option). But, attaching a debugger and stepping through the tests sometimes may help us to troubleshoot quicker under certain circumstances.

<strong>1. Install Jest Plugin</strong>

Install <a href="https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest" target="_blank">Jest plugin</a>.

<strong>2. Configure</strong>

Press <span class="code">cmd</span> + <span class="code">shift</span> + <span class="code">p</span>.

Find <span class="code">Jest: Setup Extension (Beta)</span>

Add <span class="code">yarn test</span> (or any test command you usually use for running tests) as Setup Jest Command.

Add <span class="code">launch.json</span> with Setup Jest Debug Config. By using the wizard, it will automatically generate <span class="code">launch.json</span> according to the <span class="code">yarn test</span> command.

<img class="alignnone size-medium wp-image-2719" src="https://www.mydatahack.com/wp-content/uploads/2022/10/jest-setup-extension-1-300x81.png" alt="" width="600" height="162" />

<strong>3. Run</strong>

Add breakpoint and run individual test from the test file. You can see <span class="code">Debug</span> above the test scenario and click it. See <a href="https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest" target="_blank">the plugin doc for further info</a>.

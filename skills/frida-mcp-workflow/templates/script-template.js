'use strict';

var SCRIPT_ID = 'replace-script-id';
var PURPOSE = 'replace-purpose';
var TARGETS = [
  'replace-module-or-class.target'
];

var STATE_KEY = '__frida_mcp_script_registry__';
if (!globalThis[STATE_KEY]) {
  globalThis[STATE_KEY] = {};
}

var registry = globalThis[STATE_KEY];
var installed = false;

function install() {
  if (registry[SCRIPT_ID]) {
    send({
      type: 'warn',
      script_id: SCRIPT_ID,
      message: 'Script already installed; skipping duplicate install'
    });
    return false;
  }

  registry[SCRIPT_ID] = {
    purpose: PURPOSE,
    targets: TARGETS,
    installed_at: Date.now()
  };

  installed = true;

  // Install hooks here.
  send({
    type: 'info',
    script_id: SCRIPT_ID,
    message: 'Installed',
    targets: TARGETS
  });

  return true;
}

function uninstall() {
  if (!installed) {
    return false;
  }

  // Detach hooks here.
  installed = false;
  delete registry[SCRIPT_ID];

  send({
    type: 'info',
    script_id: SCRIPT_ID,
    message: 'Uninstalled'
  });

  return true;
}

rpc.exports = {
  health: function () {
    return {
      script_id: SCRIPT_ID,
      purpose: PURPOSE,
      targets: TARGETS,
      installed: installed
    };
  },
  uninstall: function () {
    return uninstall();
  }
};

install();

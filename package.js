Package.describe({
  summary: "UI Elements for the hitchcott:backup-restore package",
  version: "1.0.0",
  name: 'hitchcott:backup-restore-ui',
  git: "https://github.com/hitchcott/meteor-backup-restore-ui"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');

  api.imply('hitchcott:backup-restore')

  api.use([
    'coffeescript',
    'underscore',
    'templating',
  ], 'client')

  api.addFiles([
    'backup-restore-ui.html',
    'backup-restore-ui.coffee'
  ], 'client');
});
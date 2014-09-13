
Template.backupRestoreControls.helpers
  'uploadingBackup' : -> Session.get 'backupRestore_uploadingBackup'

Template.backupRestoreControls.events
  'click #download-backup' : ->
    Meteor.downloadBackup()

  'change #upload-backup': (e) ->
    if e.currentTarget.files[0]?
      Session.set 'backupRestore_uploadingBackup', true
      Meteor.uploadBackup e.currentTarget.files[0], ->
        alert 'Backup Complete'
        Session.set 'backupRestore_uploadingBackup', null
        e.currentTarget.value = null

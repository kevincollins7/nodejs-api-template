'use strict';
module.exports = {
  'development': {
    'version': '1.0.1',
    'DatabaseDEV': {
      'name': 'Database1',
      'server': 'DBServer',
      'database': 'database',
      'user': 'dev.username',
      'password': 'password',
      'pool': {
        'max': 10,
        'min': 4,
        'idleTimeoutMillis': 30000
      },
      'JwtAllowedAudience': 'https://api.here.com',
      'JwtValidIssuer': 'dev.user',
      'JwtSecret': 'ASDFwwaerwFE@#$f2323r2f23',
      'JwtLifetimeMinutes': '540',
      'JwtPasswordResetLifetimeMinutes': '1440', //24 hours
      'smtp_server': 'servname',
      'smtpPort': '25',
      'enableSsl': 'false'
    }
  },
  'production': {
    'version': '1.0.1',
    'DatabasePROD': {
      'name': 'Database1',
      'server': 'DBServer',
      'database': 'database',
      'user': 'prod.username',
      'password': 'password',
      'pool': {
        'max': 10,
        'min': 4,
        'idleTimeoutMillis': 30000
      },
      'JwtAllowedAudience': 'https://api.here.com',
      'JwtValidIssuer': 'prod.user',
      'JwtSecret': 'ASDFwwaerwFE@#$f2323r2f23',
      'JwtLifetimeMinutes': '540',
      'JwtPasswordResetLifetimeMinutes': '1440', //24 hours
      'smtp_server': 'servname',
      'smtpPort': '25',
      'enableSsl': 'false'
    }
  }
}
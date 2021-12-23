import { configFTP } from '../config/ftp.js'
import vinylFTP from 'vinyl-ftp';
import  util  from 'gulp-util';

export const ftpPush = () => {
    configFTP.log = util.log;
    const ftpConnect = vinylFTP.create(configFTP);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'FTP',
                message: 'Error: <%= error.massege %>'
            }) 
        ))
        .pipe(ftpConnect.dest(`/${app.path.ftp}/${app.path.rootFolder}`))
}
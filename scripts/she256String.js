import { createHash } from 'crypto';

export default function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}
//console.dir(hash('hohoho')==hash('hohoho'))
//console.dir(hash('hohoho'))
//console.dir(hash('hohoho')==hash('hohoh2'))
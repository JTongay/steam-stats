export default function PercentageFilter($filter){
  return (input, decimals)=> {
    return $filter('number')(input, decimals) + '%';
  };
}
